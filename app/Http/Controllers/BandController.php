<?php

namespace App\Http\Controllers;

use App\Band;
use Illuminate\Http\Request;

class BandController extends Controller
{
    public function all(Request $request)
    {
        return response()->json(['sort' => ['field' => $request->input('sort'), 'order' => $request->input('order')], 'bands' => Band::orderBy($request->input('sort'), $request->input('order'))->get()->toArray()]);
    }
}
