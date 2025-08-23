import assets from "../../assets/assets";
import Title from "../Title/Title";

export default function Contact() {
    return (
        <>
            <div id="contact-us" className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 pb-20 sm:pb-20 text-gray-700 dark:text-white dark:bg-gray-900/70">
                <Title title="Reach out to us" description="From strategy to execution, we craft digital solutions that move your business forward." />

                <form className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full">
                    <div className="w-auto">
                        <p className="mb-2 text-sm font-medium">Your name</p>
                        <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
                            <img src={assets?.person_icon} alt="icon" />
                            <input type="text" name="name" placeholder="Enter your name" className="w-full p-3 text-sm outline-none" autoComplete="off" required/>
                        </div>
                    </div>
                    <div className="w-auto">
                        <p className="mb-2 text-sm font-medium">Email id</p>
                        <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
                            <img src={assets?.email_icon} alt="icon" />
                            <input type="email" name="email" placeholder="Enter your name" className="w-full p-3 text-sm outline-none" autoComplete="off" required/>
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <p className="mb-2 text-sm font-medium">Message</p>
                        <textarea name="message" rows={8} placeholder="Enter your message" className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600" required />
                    </div>
                    <button className="w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer" type="submit">Submit <img src={assets?.arrow_icon} alt="arrow icon" className="w-4" /></button>
                </form>
            </div>
        </>
    )
}