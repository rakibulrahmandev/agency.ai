import {company_logos} from "../../assets/assets";

export default function TrustedBy() {
    return (
        <>
            <div className="w-full flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 gap-10 text-gray-700 dark:text-white/80 dark:bg-gray-900/70">
                <h3 className="font-semibold">Trusted by Leading Companies</h3>
                <div className="flex items-center justify-center flex-wrap gap-10 m-4">
                    {
                        company_logos.map((logo, idx) => (
                            <img key={idx} src={logo} alt="companies logo" className="max-h-5 sm:max-h-6 dark:drop-shadow-xl" />
                        ))
                    }
                </div>
            </div>
        </>
    )
}