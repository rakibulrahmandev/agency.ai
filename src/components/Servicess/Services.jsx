import assets from "../../assets/assets"
import ServiceCard from "../ServiceCard/ServiceCard"
import Title from "../Title/Title"

export default function Services() {

    const servicesData = [
        {
            title: 'Advertising',
            description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
            icon: assets?.ads_icon
        },
        {
            title: 'Content marketing',
            description: 'We help you execute your plan and deliver results.',
            icon: assets?.marketing_icon
        },
        {
            title: 'Content writing',
            description: 'We help you create a marketing strategy that drives results.',
            icon: assets?.content_icon
        },
        {
            title: 'Social media',
            description: 'We help you build a strong social media presence and engage with your audience.',
            icon: assets?.social_icon
        }
    ]

    return (
        <>
            <div id="services" className="w-full relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white dark:bg-gray-900/70">
                <div className="w-auto">
                    <img src={assets?.bgImage2} alt="background image" className="absolute -top-110 -left-70 -z-1"/>
                </div>
                <Title title="How can we help?" description="From strategy to execution, we craft digital solutions that move your business forward." />
                <div className="flex flex-col md:grid grid-cols-2">
                    {
                        servicesData.map((service, idx) => (
                            <ServiceCard key={idx} service={service} idx={idx} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}