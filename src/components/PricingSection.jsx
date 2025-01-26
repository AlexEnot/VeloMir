import { pricingOptions } from "../constants";
import { CheckCircle2 } from 'lucide-react';

function PricingSection(){
    return(<>
    <div className=" mt-20">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 lg:mt-20 tracking-wide
         my-8">
            Pricing
        </h2>
        <div className="flex flex-wrap justify-center items-center">
            {pricingOptions.map((pOption, index) => (
                <div key={index} className=" w-full sm:w-1/2 lg:w-1/3 p-2">
                    <div className=" p-10 border border-neutral-700 rounded-xl">
                        
                        <h2 className=" text-4xl md-8">
                            {pOption.title}
                            {pOption.title === "Pro" && 
                            <span className=" bg-gradient-to-r from-red-400 to-red-600 text-transparent
                             bg-clip-text text-xl mb-4 ml-2">
                                (Most Popular)
                            </span>}
                        </h2>
                        <p className=" mb-8">
                            <span className=" text-5xl mt-6 mr-2">
                                {pOption.price}
                            </span>
                            <span className=" text-neutral-400 tracking-tight">/Month</span>
                        </p>
                        <ul>
                            {pOption.features.map((feature, index) => (
                                <li key={index} className=" mt-8 flex items-center">
                                    <CheckCircle2/>
                                    <span className=" ml-2">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="#" className=" inline-flex justify-center items-center
                         text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-red-700
                          border border-red-700 rounded-lg transition duration-200">
                            Subscribe
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </div>
    </>);
}

export default PricingSection