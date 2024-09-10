import { useState } from "react";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
const stats = [
  { id: 1, name: 'In Anum', value: ' cr', value1:'300' },
  { id: 2, name: 'Borrowers served', value: ' lakh',value1:'3' },
  { id: 3, name: 'Reduction in NPA', value: ' %',value1:'15' },
]

export const Stats = () => {
  const [counterOn,setCounterOn] = useState(false);
  return (
      <div className="bg-white py-24 sm:py-32 justify-start items-start">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-2xl leading-7 text-[#1A535C]">{stat.name}</dt>
                <dd className="order-first text-3xl  tracking-tight text-[#15B776] font-abc font-bold sm:text-5xl"> <CountUp start={0} end={stat.value1} duration ={5} delay={2}/>
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  
<CountUp start={0} end={300} duration ={4} delay={0}/>

//<CountUp start={0} end={2.8} duration ={4} delay={0}/>

// <CountUp start={0} end={15} duration ={4} delay={0}/>