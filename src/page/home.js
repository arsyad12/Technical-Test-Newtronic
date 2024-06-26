import { Link } from "react-router-dom";
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

function Home() {
  return (
    <>
      <div className="bg-cyan-500">
        <div className="bg-white shadow-lg shadow-cyan-600">
          <Header />
        </div>

        <div className="container mx-auto">
          <div className="grid  grid-cols-1 md:grid-cols-3 items-center m-20">
            <div className="order-last md:order-first md:col-span-2">
              <h1 className="h1 mb-8 font-bold text-[30px]">
              Aplikasi dalam bidang pendidikan yang dikembangkan oleh perusahaan newtronic
              </h1>

              <button class="p-2 rounded border-4 mt-10 btn-start mb-10 border-orange-600 bg-orange-600 text-white">
                Mulai Konsultasi
              </button>
            </div>
            <div className="">
              <img className="" src="/img/banner1.png" alt="logo" />
            </div>
          </div>
        </div>

        {/*End of Section 1 */}

        {/*Section 2 */}
        <div className="container mx-auto mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center m-20">
            <div className="col-span-1 ">
              <div className="bg-cyan-400 rounded-full flex justify-center mb-5">
                <img src="/img/banner2.png" alt="logo" />
              </div>
            </div>

            <div className="col-span-1 mx-10">
              <h1 className="font-bold text-[15px] text-center md:text-left md:text-[25px] mb-10">
                Program Unggulan Akademi Prestasi
              </h1>
              {[
                "Karantina Bergaransi",
                "Privat Bergaransi",
                "Intensif Class",
                "Online Class",
              ]?.map((item, key) => (
                <div key={key} className="flex gap-4 mb-6">
                  <img src="/tick2.png" alt="pic1" />
                  <p className="text-[12px] md:text-[15px]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/*End of Section 2 */}

        {/*Section 3 */}
        <div className="container mx-auto mt-20 d-dekstop">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center m-20">
            <div className="content-text order-last md:order-first md:col-span-2">
              <h1 className="font-bold text-[15px] md:text-center md:text-[30px] mb-5">
                Road To Succes
              </h1>
              <div className="grid grid-cols-1">
                <div>
                  {[
                    "Holistic Assessment",
                    "Personalized Program",
                    "Coaching & Mentoring",
                    "Karantina Intensif",
                    "Best Result",
                  ]?.map((item, key) => (
                    <div key={key} className="flex gap-4 mb-6 md:mx-40">
                      <img src="/tick2.png" alt="pict1" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-cyan-400 rounded-full flex justify-center mb-5">
              <img src="/img/banner3.png" alt="pic2" />
            </div>
          </div>
        </div>

        {/*End of Section 3 */}

        {/*Section 4 CTA */}
        <div className="grid place-items-center mt-20">
          <div className="box-cta border-4 m-10  border-cyan-600 bg-cyan-600 grid grid-cols-1 md:grid-cols-2 items-center md:m-20 p-20 rounded-tr-xl rounded-bl-xl">
            <div className="text-[12px] text-white text-justify md:text-justify md:px-10 md:text-[23px] md:text-white ">
              <span>
                Saat nya jadi mahasiswa baru di kampus PTN Favorit dan kampus
                Kedokteran PTN bersama
                <span className="text-yellow-300"> Akademi Prestasi ..! </span>
              </span>
            </div>
            <div className="grid mt-5 md:grid-cols-1 justify-center md:justify-items-end">
              <Link href={"/talent-list"}>
                <button className="border-4 p-2 btn-cta  border-orange-600 bg-orange-600 text-white rounded-xl">
                  Mulai Dari Sekarang
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*End of Section 4 */}

      <Footer />
    </>
  );
}

export default Home;
