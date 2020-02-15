import React from 'react'
import { Octagon } from '../../styles/octagons'
import desc from '../../styles/colors'

export default function CalendarOctogen(props) {
  const color = props.color || '#C1C1C1'
  const ratio = props.ratio || 1
  const width = ratio * 225
  const height = ratio * 240
  const rotated = props.rotated

  const showTalkIcon = () => {
    return (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M120.139 215.276C124.824 217.996 130.612 217.979 135.281 215.23L214.63 168.508C219.222 165.804 222.035 160.866 222.019 155.536L221.732 62.2532C221.715 56.9236 218.872 52.0029 214.263 49.327L134.628 3.09482C129.942 0.374717 124.154 0.392539 119.486 3.14144L40.1371 49.8631C35.5444 52.5673 32.7316 57.5053 32.748 62.835L33.0352 156.118C33.0516 161.448 35.8947 166.368 40.504 169.044L120.139 215.276ZM204.804 110.29L201.659 107.072C201.466 106.875 201.149 106.871 200.952 107.064C200.754 107.257 200.751 107.574 200.944 107.771L203.245 110.126L48.7384 108.367L48.727 109.367L203.234 111.126L200.879 113.428C200.682 113.621 200.678 113.938 200.871 114.135C201.064 114.333 201.381 114.336 201.578 114.143L204.796 110.998C204.994 110.805 204.997 110.488 204.804 110.29Z"
        fill={color}
      />
    )
  }

  const showPrayIcon = () => {
    return (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M135.546 2.03627C130.929 -0.651174 125.231 -0.680315 120.587 1.95977L39.0648 48.3027C34.3986 50.9552 31.5054 55.8988 31.478 61.2662L31.0002 154.689C30.9727 160.056 33.8153 165.029 38.454 167.73L119.498 214.904C124.115 217.591 129.813 217.62 134.457 214.98L215.979 168.637C220.645 165.985 223.538 161.041 223.566 155.674L224.044 62.251C224.071 56.8836 221.228 51.9107 216.59 49.2105L135.546 2.03627ZM126.516 35.6244L123.308 38.7801C123.112 38.9737 123.109 39.2903 123.303 39.4872C123.496 39.684 123.813 39.6866 124.01 39.493L126.357 37.1838L125.233 173.79L126.233 173.798L127.357 37.192L129.666 39.5395C129.86 39.7364 130.177 39.739 130.373 39.5454C130.57 39.3517 130.573 39.0351 130.379 38.8383L127.224 35.6302C127.03 35.4334 126.713 35.4308 126.516 35.6244ZM91.2205 38.7488L94.4665 35.6321C94.6657 35.4408 94.9822 35.4472 95.1734 35.6464L98.2902 38.8924C98.4814 39.0915 98.475 39.4081 98.2758 39.5993C98.0766 39.7906 97.7601 39.7841 97.5688 39.585L95.2882 37.2097L92.5144 173.792L91.5147 173.772L94.2884 37.1894L91.9131 39.4701C91.714 39.6614 91.3974 39.6549 91.2062 39.4557C91.0149 39.2566 91.0214 38.94 91.2205 38.7488ZM161.129 174.164L164.324 170.995C164.52 170.801 164.521 170.484 164.327 170.288C164.132 170.092 163.816 170.091 163.62 170.285L161.282 172.604L161.827 35.9947L160.827 35.9907L160.282 172.6L157.963 170.263C157.769 170.066 157.452 170.065 157.256 170.26C157.06 170.454 157.059 170.771 157.253 170.967L160.422 174.161C160.617 174.357 160.933 174.359 161.129 174.164Z"
        fill={color}
      />
    )
  }

  const showFunIcon = () => {
    return (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M120.113 2.25914C124.885 -0.705758 130.913 -0.755763 135.734 2.12956L214.557 49.3117C219.044 51.9979 221.809 56.8277 221.852 62.0577L222.658 159.178C222.701 164.408 220.017 169.283 215.575 172.043L137.545 220.526C132.773 223.491 126.745 223.541 121.925 220.656L43.1016 173.474C38.614 170.787 35.8495 165.958 35.8061 160.728L35.0005 63.6076C34.9571 58.3776 37.6411 53.5026 42.0835 50.7423L120.113 2.25914ZM143.453 176.77L142.477 181.163C142.417 181.432 142.15 181.602 141.88 181.542L137.487 180.566C137.218 180.506 137.048 180.239 137.108 179.97C137.167 179.7 137.435 179.53 137.704 179.59L140.919 180.304L64.0384 59.4926L64.8821 58.9557L141.762 179.768L142.477 176.553C142.537 176.283 142.804 176.113 143.073 176.173C143.343 176.233 143.513 176.5 143.453 176.77ZM110.758 31.0213L109.736 35.4038C109.673 35.6727 109.841 35.9415 110.11 36.0042C110.378 36.0669 110.647 35.8998 110.71 35.6308L111.458 32.424L187.075 154.03L187.924 153.502L112.307 31.8959L115.514 32.6437C115.783 32.7064 116.052 32.5392 116.114 32.2703C116.177 32.0014 116.01 31.7326 115.741 31.6698L111.359 30.6479C111.09 30.5852 110.821 30.7524 110.758 31.0213Z"
        fill={color}
      />
    )
  }

  return (
    <Octagon zIndex={props.zIndex} rotated={rotated}>
      <svg
        height={height}
        width={width}
        viewBox="0 0 225 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M104.128 20.7682C108.748 18.0863 114.446 18.064 119.087 20.7097L200.912 67.3549C205.575 70.0131 208.462 74.9602 208.483 80.3276L208.85 174.162C208.871 179.529 206.022 184.499 201.38 187.194L119.923 234.477C115.303 237.159 109.605 237.181 104.964 234.536L23.1397 187.89C18.4768 185.232 15.5895 180.285 15.5685 174.918L15.2016 81.0833C15.1807 75.7159 18.0292 70.7464 22.6712 68.0518L104.128 20.7682Z"
          fill="#BDBABA"
          fillOpacity="0.36"
        />
        {props.type === desc.EVENTS.PRAY.DESC && showPrayIcon()}
        {props.type === desc.EVENTS.FUN.DESC && showFunIcon()}
        {props.type === desc.EVENTS.TALK.DESC && showTalkIcon()}
      </svg>
    </Octagon>
  )
}
