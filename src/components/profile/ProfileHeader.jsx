import profilePicture from "../../assets/images/profilePicture.png"

const ProfileHeader = () => {
    return (
        <div className="flex flex-col w-full borderWithBackground p-[24px] gap-[24px] dark:bg-[#1F2022] dark:border-[#2d2f32]">
            <div className="flex gap-[24px] items-center">
                <img src={profilePicture} alt="userImage" className="lg:w-[122px] lg:h-[122px] min-w-[72px] max-w-[72px] min-h-[72px] max-h-[72px] rounded-full object-cover object-top" />
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-4 text-[#111927] dark:text-white font-[500]">
                        <h1 className="text-[18px]" >adarshjain</h1>
                        <button className="text-[14px] p-[6px] rounded-[6px] border-[1px] border-[#ecedf0] hover:bg-[#cacaca11] dark:border-none dark:bg-[#2D2F32] hidden lg:block">Edit Profile</button>
                    </div>
                    <h1 className="text-[14px] text-[#898f99]" >adarshjain</h1>
                    <div className="items-center gap-4  hidden lg:flex">
                        <div className="flex items-center gap-1 pr-4">
                            <h1 className="text-[12px] text-[#898f99]" >Workouts</h1>
                            <h1 className="text-[14px] text-[#111927] dark:text-white font-[500]" >144</h1>
                        </div>
                        <div className="flex items-center gap-1 pr-4">
                            <h1 className="text-[12px] text-[#898f99]" >Followers</h1>
                            <h1 className="text-[14px] text-[#111927] dark:text-white font-[500]" >0</h1>
                        </div>
                        <div className="flex items-center gap-1 pr-4">
                            <h1 className="text-[12px] text-[#898f99]" >Following</h1>
                            <h1 className="text-[14px] text-[#111927] dark:text-white font-[500]" >0</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex max-w-[300px] w-[100%] items-center justify-between lg:hidden">
                <div className="flex flex-col items-center gap-1 pr-4">
                    <h1 className="text-[12px] text-[#898f99]" >Workouts</h1>
                    <h1 className="text-[14px] text-[#111927] dark:text-white font-[500]" >144</h1>
                </div>
                <div className="flex flex-col items-center gap-1 pr-4">
                    <h1 className="text-[12px] text-[#898f99]" >Followers</h1>
                    <h1 className="text-[14px] text-[#111927] dark:text-white font-[500]" >0</h1>
                </div>
                <div className="flex flex-col items-center gap-1 pr-4">
                    <h1 className="text-[12px] text-[#898f99]" >Following</h1>
                    <h1 className="text-[14px] text-[#111927] dark:text-white font-[500]" >0</h1>
                </div>
            </div>
            <button className="text-[14px] p-[6px] rounded-[6px] text-[#111927] border-[1px] dark:border-none dark:bg-[#2D2F32] dark:text-white font-[500] border-[#ecedf0] hover:bg-[#cacaca11] lg:hidden">Edit Profile</button>
        </div>
    )
}

export default ProfileHeader