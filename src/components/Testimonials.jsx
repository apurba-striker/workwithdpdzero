import { motion } from "framer-motion";
import abc from "../assets/images/abc.png";

import { QuoteIcon } from "../assets/icons/QuoteIcon";
import tcs from "../assets/images/tcs.png";
import pocketly from "../assets/logos/pocketly logo 1.png";
import cashe from "../assets/logos/cashe-logo.png";
import profile2 from "../assets/images/profile2.png";
import testimonial3 from "../assets/images/testimonial3.png";

export const Testimonials = () => (
  <section className="bg-[#BFB9FF33] text-black">
	<div className="container px-6 py-12 mx-auto">
		<div className="grid items-center gap-4 xl:grid-cols-6">
			<div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
				<h2 className="text-4xl font-bold">The best lenders love us</h2><span className="left-2 top-10"><img src={abc} width={630} height={630}   /></span>
				
			</div>
			{/* <span><img src={abc} width={630} height={630} className="left-2 top-1"  /></span> */}
			
			<div className="p-6 xl:col-span-4">
				<div className="grid gap-5 md:grid-cols-2">
					<div className="grid content-center gap-5">
						<div className="p-6 row-span-1 rounded shadow-md bg-white">
						<img src={cashe}/>
							<p>Brand design refers to the visual and tangible elements used to create the brand's identity Brand design refers to the visual and tangible elements used to create the brand's identity</p>
							<div className="flex items-center mt-4 space-x-4">
								<img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
								<div>
									<p className="text-lg font-semibold">Leroy Jenkins</p>
									<p className="text-sm dark:text-gray-400">CTO of Company Co.</p>
								</div>
							</div>
						</div>
			
					</div>
					<div className="grid content-start gap-4">
           
						<div className="p-6 rounded shadow-md bg-[#FFFFFF99] text-black">
                         <img src={tcs}/>
							<p>Brand design refers to the visual and tangible elements used to create the brand's identity Brand design refers to the visual and tangible elements used to create the brand's identity</p>
							<div className="flex items-center mt-4 space-x-4">
								<img src="https://source.unsplash.com/50x50/?portrait?3" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
								<div>
									<p className="text-lg font-semibold">Leroy Jenkins</p>
									<p className="text-sm dark:text-gray-400">CTO of Company Co.</p>
								</div>
							</div>
						</div>
						<div className="p-6 rounded shadow-md  bg-[#FFFFFF99] text-black">
						<img src={pocketly}/>
							<p>Brand design refers to the visual and tangible elements used to create the brand's identity Brand design refers to the visual and tangible elements used to create the brand's identity</p>
							<div className="flex items-center mt-4 space-x-4">
								<img src="https://source.unsplash.com/50x50/?portrait?4" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
								<div>
									<p className="text-lg font-semibold">Leroy Jenkins</p>
									<p className="text-sm dark:text-gray-400">CTO of Company Co.</p>
								</div>
							</div>
						</div>
					</div>
					
					
					
                
				</div>
			</div>
		
			
		</div>
	</div>
	
</section>

);

