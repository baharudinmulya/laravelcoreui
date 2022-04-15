<?php

namespace App\Http\Controllers;

use App\Models\Pesanan;
use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Models\Produk;
use App\Models\Pelanggan;

class PesananController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $per_Page = $request->per_Page ? $request->per_Page : 5;
        $pesanan = Pesanan::join('produk', 'pesanan.produk_id', '=', 'produk.id')
            ->join('pelanggan', 'pesanan.pelanggan_id', '=', 'pelanggan.id')
            ->select('pesanan.*', 'produk.nama_produk', 'pelanggan.nama_pelanggan')
            ->paginate($per_Page);
        return response()->json($pesanan);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function showSelectnamaproduk()
    {
        $joinselect = Produk::select('nama_produk')->distinct()->get();
        return response()->json($joinselect);
    }

    public function showSelectnamapelanggan()
    {
        $joinselect = Pelanggan::select('nama_pelanggan')->distinct()->get();
        return response()->json($joinselect);
    }
    public function store(Request $request)
    {
        $produk_id = Produk::where('nama_produk', $request->nama_produk)->pluck('id')->first();
        $pelanggan_id = Pelanggan::where('nama_pelanggan', $request->nama_pelanggan)->pluck('id')->first();
        $harga_produk = Produk::where('nama_produk', $request->nama_produk)->pluck('harga')->first();
        $total_harga = $harga_produk * $request->qty;
        $invoice = Carbon::now()->format('Ymdhis') .  $pelanggan_id .  $produk_id;
        $status = "baru";
        $pesanan = Pesanan::create([
            'invoice_id' => $invoice,
            'produk_id' => $produk_id,
            'pelanggan_id' => $pelanggan_id,
            'qty' => $request->qty,
            'total_harga' => $total_harga,
            'status' => $status,
            'date' => Carbon::now()->format('Y-m-d')
        ]);
        
        return response()->json($pesanan);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $pesanan = Pesanan::find($id);
        $jumlahbarang = $request->qty;
        $hargaproduk = Produk::where('nama_produk', $request->nama_produk)->pluck('harga')->first();
        $total = $request->qty * $hargaproduk;
        $produkid = Produk::where('nama_produk', $request->nama_produk)->pluck('id')->first();
        $pelangganid = Pelanggan::where('nama_pelanggan', $request->nama_pelanggan)->pluck('id')->first();
        $pesanan = Pesanan::updateorCreate([
            'invoice_id' => $request->invoice_id,
        ],
        [
            'produk_id' => $produkid,
            'pelanggan_id' => $pelangganid,
            'qty' => $request->qty,
            'total_harga' => $total,
            'status' => $request->status,
            'date' => Carbon::now()->format('Y-m-d')
        ]);
        return response()->json($pesanan);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
