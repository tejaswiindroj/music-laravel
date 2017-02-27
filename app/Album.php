<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Album extends Model
{
    protected $table = 'albums';
    public $timestamps = false;
    public function getRecordedDateAttribute($value)
    {
        $date = new Carbon($value);
        return $date->toFormattedDateString();
    }
    public function getReleaseDateAttribute($value)
    {
        $date = new Carbon($value);
        return $date->toFormattedDateString();
    }
    public function band()
    {
        return $this->belongsTo('App\Band');
    }
}
