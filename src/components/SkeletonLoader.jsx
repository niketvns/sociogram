import React from 'react';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoader = () => {

    return (
        <div className={'flex flex-col gap-8'}>
            {
                [1,2,3,4,5].map((id)=>(
                    <div key={id}>
                        <SkeletonTheme baseColor="#241F3AFF" highlightColor="#434160">
                            <div className={'post flex justify-around items-center gap-4'}>
                                <Skeleton circle={true} width={'40px'} height={'40px'}/>
                                <Skeleton containerClassName="flex-1" height={'30px'}/>
                            </div>
                            <p>
                                <Skeleton count={3}/>
                            </p>
                        </SkeletonTheme>
                    </div>
                ))
            }
        </div>

    );
};

export default SkeletonLoader;