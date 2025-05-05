import Image from "next/image";

export default function Home() {
   const cities =['Hyderabad','Bangalore','Chennai','Delhi','Mumbai','Pune','Ahmedabad','Surat','Indore','Lucknow', 'Jaipur', 'Noida','Kolkata']
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col  text-center gap-[32px] row-start-2 items-center sm:items-start">
          <h1  className=" text-2xl font-bold">RealState  Project City Wise</h1>
       

        <div className="container-sm grid grid-cols-3 gap-4">
         
          {
            cities.map((city)=>{
              return <a
              key={city}
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href={`${process.env.NEXT_PUBLIC_API_BASE_URL}/city/${city}`}
            target="_blank"
            rel="noopener noreferrer"
            >
            
              {city}
            </a>
            })
          }
         
        </div>
      </main>
  
    </div>
  );
}
