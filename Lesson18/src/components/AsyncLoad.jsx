import React, { Suspense, lazy } from 'react'
import Spinner from './common/Spinner'

export const AsyncLoad =  LoadComponent => props =>
    <Suspense fallback={<Spinner />}>
        <LoadComponent {...props}/>
    </Suspense>


export const lazyLoad = filepath => lazy(() => import(`${filepath}`))
