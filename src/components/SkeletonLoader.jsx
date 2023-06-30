import React from 'react';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";
import {useGlobalAuth} from "../contexts";

const SkeletonLoader = ({count}) => {
    const {theme} = useGlobalAuth()

    const returnCount = (count) => {
        const output = []
        for (let i = 0; i < count; i++)
            output.push(i);
        return output;
    }

    const arr = count ? returnCount(count) : [1,2,3,4]

    return (
        <div className={'flex flex-col gap-8'}>
            {
                arr.map((id)=>(
                    <div key={id}>
                        <SkeletonTheme baseColor={theme === 'dark' ? "#241F3AFF" : "#ffffff"} highlightColor={theme === 'dark' ? "#434160" : "#f0eef6"}>
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