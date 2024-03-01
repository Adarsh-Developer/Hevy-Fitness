import { FeedLeft, FeedRight } from '../index'

const Feed = () => {
    return (
        <div className='flex w-[100%] justify-center sm:p-10 pt-[0] p-2 gap-[20px]'>
            <div className='leftFeed w-[100%] max-w-[800px] overflow-auto h-screen'>
                <FeedLeft />
            </div>

            <div className='min-w-[350px] max-w-[350px] lg:block hidden'>
                <FeedRight />
            </div>
        </div>
    )
}

export default Feed