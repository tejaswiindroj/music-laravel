<?php

namespace App\Http\Controllers;

use App\Band;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Respect\Validation\Validator as v;

class BandController extends Controller
{
    public function all(Request $request)
    {
        return response()->json(['sort' => ['field' => $request->input('sort'), 'order' => $request->input('order')], 'bands' => Band::orderBy($request->input('sort'), $request->input('order'))->get()->toArray()]);
    }

    public function post(Request $request)
    {
        $name = $request->input('name');
        if(!empty($request->input('start_date')) && v::date('F n, Y')->validate($request->input('start_date'))===false ) return response()->json(['created'=>false]);
        $start_date = empty($request->input('start_date'))?null: Carbon::createFromFormat('F n, Y', $request->input('start_date'));
        $website = empty($request->input('website'))?null:$request->input('website');
        $website = parse_url($website, PHP_URL_SCHEME) === null ? 'http://' . $website : $website;
        $still_active = empty($request->input('still_active'))?null:$request->input('still_active');
        if(empty($name) || (!empty($website) && v::url()->validate($website)===false) || ($start_date!=null)) {
            return response()->json(['created'=>false]);
        }
        return response()->json(['created'=>true]);
    }
}
