import { CarCard, CustomFilter, SearchBar } from "@/components";
import Hero from "@/components/Hero";
import { fuels, yearsOfProduction } from "@/constants";
import { HomeProps } from "@/types";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home({searchParams}: HomeProps) {

const allCars=await fetchCars(
  {manufacturer:searchParams.manufacturer,
    year:searchParams.year,
    fuel:searchParams.fuel,
    limit:searchParams.limit,
    model:searchParams.model});
const isDataEpmty = !Array.isArray(allCars)||allCars.length<1||!allCars;  
  return (
   
      <main className="overflow-hidden">
      <Hero/>

      <div className="mt-12 padding-x padding-y 
      max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Car Catalogue
          </h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar/>
          <div className="home__filter-container">
          <CustomFilter title="fuel" options={fuels}/>
          <CustomFilter title="year" options={yearsOfProduction}/>
          </div>
        </div>

        {
          !isDataEpmty? (
            <section>
              <div className="home__cars-wrapper">
                {
                  allCars?.map((car)=>(
                  <CarCard car={car}/>
                ))}
              </div>
            </section>
          ):(
            <div className="home__error-container">
              <h2 text-black  text-xl font-bold>
                Oops, no results
              </h2>
              
            </div>
          )

        }

      </div>
      </main>
      

  
  );
}
