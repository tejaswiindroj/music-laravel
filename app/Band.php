<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Band extends Model
{
    protected $table = 'bands';
    public $timestamps = false;
    public function getStillActiveAttribute($value)
    {
        return boolval($value);
    }
    public function getStartDateAttribute($value)
    {
        $date = new Carbon($value);
        return $date->toFormattedDateString();
    }
    public function albums()
    {
        return $this->hasMany('App\Album');
    }
}
