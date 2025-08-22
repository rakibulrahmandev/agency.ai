import assets from "../../assets/assets";
import Title from "../Title/Title";

export default function OurWork() {

    const workData = [
        {
            title: 'Mobile app marketing',
            description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
            img: assets?.work_mobile_app
        },
        {
            title: 'Dashboard management',
            description: 'We help you execute your plan and deliver results.',
            img: assets?.work_dashboard_management
        },
        {
            title: 'Fitness app promotion',
            description: 'We help you create a marketing strategy that drives results.',
            img: assets?.work_fitness_app
        }
    ]

    return (
        <>
            <div id="our-work" className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">
                <Title title="Our Work" description="From strategy to execution, we craft digital solutions that move your business forward." />
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
                    {
                        workData.map((work, idx) => (
                            <div key={idx} className="hover:scale-102 duration-500 transition-all cursor-pointer">
                                <div className="w-auto">
                                    <img src={work?.img} alt="card image" className="w-full rounded-xl" />
                                </div>
                                <div className="w-auto">
                                    <h3 className="mt-3 mb-2 text-lg font-semibold">{work?.title}</h3>
                                    <p className="text-sm opacity-60 w-5/6">{work?.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}