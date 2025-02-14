import { cars } from "@/constants";
import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters:FilterProps)
{
	const{manufacturer,year,fuel,limit,model}=filters;
return cars.filter(car => 
        (!manufacturer || car.make.toLowerCase() === manufacturer.toLowerCase()) &&
        (!year || car.year == year) &&
        (fuel === "fuel"||!fuel || car.fuel_type.toLowerCase() === fuel.toLowerCase()) &&
        (!model || car.model.toLowerCase().includes(model.toLowerCase()))
    ).slice(0, limit || 10);

}

export const calculateCarRent = (city_mpg: number, year: number) => {
	const basePricePerDay = 50;
	const mileageFactor = 0.1;
	const ageFactor = 0.05; 
  
	const mileageRate = city_mpg * mileageFactor;
	const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
	
	const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
	return rentalRatePerDay.toFixed(0);
  };

  
  export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(type, value);
   
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
    return newPathname
  }