<?php

namespace App\Http\Controllers;

use App\Album;
use App\Band;
use Illuminate\Http\Request;

class AlbumController extends Controller
{
    public function allWithBands(Request $request)
    {
        if ($request->input('band') != 0) {
            $albumWithBand = Album::with('band')->where('band_id', $request->get('band'));
        } else {
            $albumWithBand = Album::with('band');
        }
        return response()->json(['bands' => Band::all()->toArray(), 'albums' => $albumWithBand->get()->toArray()]);
    }
}
