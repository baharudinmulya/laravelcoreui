<?php

namespace App\Http\Controllers;
use App\Models\Pesanan;
use App\Models\Pelanggan;
use App\Models\Kategori;
use App\Models\Produk;
use Illuminate\Http\Request;

class Keseluruhanomsetcontroller extends Controller
{
    public function index()
    {
        $totalomset = Pesanan::where('status', '=', 'selesai')->sum('total_harga');
        return response()->json($totalomset);
    }

    public function customersa()
    {
        $customersa = Pelanggan::count('nama_pelanggan');
        return response()->json($customersa);
    }

    public function kategoriproduk()
    {
        $kategoriproduk = Kategori::count('jenis_kategori');
        return response()->json($kategoriproduk);
    }

    public function jumlahproduk()
    {
        $jumlahproduk = Produk::count('nama_produk');
        return response()->json($jumlahproduk);
    }

    public function orderbaru()
    {
        $orderbaru = Pesanan::where('status', '=', 'baru')->count('status');
        return response()->json($orderbaru);
    }
    public function orderproses()
    {
        $orderproses = Pesanan::where('status', '=', 'proses')->count('status');
        return response()->json($orderproses);
    }
    public function orderdikirim()
    {
        $orderdikirim = Pesanan::where('status', '=', 'dikirim')->count('status');
        return response()->json($orderdikirim);
    }
    public function orderselesai()
    {
        $orderselesai = Pesanan::where('status', '=', 'selesai')->count('status');
        return response()->json($orderselesai);
    }
}
