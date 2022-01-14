import React from 'react'
import { data } from '../../constants'
import './revenue-list.scss'
import ProgressBar from '../progressbar/ProgressBar'

const RevenueList = () => {
    return (
        <ul className='revenue-list'>
            {
                data.revenueByChannel.map((item, index) => (
                    <li className="revenue-list__item" key={`revenue-${index}`}>
                        <div className="revenue-list__item__title">
                            {item.title}
                            <span className={
                                `${item.value < 50 ? 'txt-success' : 'txt-danger'}`
                            }>
                                {item.value}%
                            </span>
                        </div>
                        <div>
                            <ProgressBar value={item.value} />
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}

export default RevenueList
