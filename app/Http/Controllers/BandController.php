<?php

namespace App\Http\Controllers;

use App\Band;
use Illuminate\Http\Request;

class BandController extends Controller
{
    public function all() {
        return response()->json(Band::all()->toArray());
    }
}
