<?php

namespace App\Http\Controllers;
use App\Models\Pesanan;
use App\Models\Pelanggan;
use Illuminate\Http\Request;

class LaporanController extends Controller
{
    public function index(Request $request)
    {
        $per_Page = $request->per_Page ? $request->per_Page : 5;
        $totalomset = Pesanan::join('pelanggan', 'pesanan.pelanggan_id', '=', 'pelanggan.id')
            ->select('pesanan.*', 'pelanggan.nama_pelanggan')
            ->paginate($per_Page);

        return response()->json($totalomset);
    }
}
