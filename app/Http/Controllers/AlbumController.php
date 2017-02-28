<?php

namespace App\Http\Controllers;

use App\Album;
use App\Band;
use Illuminate\Http\Request;

class AlbumController extends Controller
{
    public function allWithBands(Request $request)
    {
        $albumWithBand = Album::leftJoin('bands', 'bands.id', '=', 'albums.band_id');
        $albumWithBand->orderBy($request->input('sort'), $request->input('order'));
        if ($request->input('band') != 0) $albumWithBand = $albumWithBand->where('band_id', $request->get('band'));
        return response()->json(['bands' => Band::all()->toArray(), 'albums' => $albumWithBand->get(['albums.*', 'bands.id as band_id', 'bands.name as band_name'])->toArray(), 'sort' => ['field' => $request->input('sort'), 'order' => $request->input('order')]]);
    }
}
