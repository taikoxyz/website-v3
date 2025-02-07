import React, { SVGProps } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TaikoIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
    useGSAP(() => {
        gsap.to(".tk-gradient", {
            attr: {
                gradientTransform: "rotate(-360 190 190)",
            },
            repeat: -1,
            duration: 4,
            ease: "none",
        });
    });

    return (
        <svg {...props} viewBox="0 0 321 287" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M160.313 3.06462C147.776 3.06462 136.425 10.4932 131.403 21.9658L94.2332 106.866C90.5624 115.251 90.7388 124.407 94.1403 132.313L94.1798 132.404L94.181 132.407C95.4238 135.279 95.233 138.559 93.6984 141.261L93.6893 141.278L93.6731 141.306C92.1233 143.969 89.4389 145.762 86.387 146.158L86.3767 146.161L86.2436 146.177C77.6547 147.154 69.5957 151.584 64.1469 158.989L9.20553 233.634C1.7789 243.729 1.02714 257.258 7.28508 268.122C13.5637 278.97 25.6677 285.091 38.1176 283.714L130.227 273.46L130.311 273.451C139.407 272.419 147.239 267.666 152.355 260.744C154.215 258.217 157.179 256.722 160.313 256.722C163.461 256.722 166.391 258.227 168.259 260.726L168.269 260.739C168.271 260.742 168.273 260.746 168.276 260.749C173.406 267.689 181.269 272.448 190.398 273.46L282.426 283.705H282.428L282.511 283.714H282.513C294.958 285.108 307.059 278.992 313.338 268.127C319.599 257.262 318.849 243.73 311.421 233.635L313.889 231.819C322.039 242.894 322.861 257.74 315.994 269.657L314.671 268.895L315.993 269.659C309.12 281.552 295.885 288.262 282.258 286.769H282.256L282.172 286.76L190.06 276.506C180.055 275.397 171.427 270.174 165.804 262.56L165.796 262.551L165.794 262.548C164.493 260.815 162.47 259.786 160.313 259.786C158.151 259.786 156.105 260.819 154.823 262.561L154.821 262.563C149.197 270.175 140.57 275.397 130.566 276.506L130.482 276.515L38.4556 286.76C24.7967 288.271 11.5195 281.556 4.63271 269.658L4.63118 269.655C-2.2349 257.738 -1.41176 242.894 6.73698 231.818L61.6785 157.173C67.6186 149.1 76.4009 144.249 85.7626 143.147L85.7659 143.146L85.8975 143.131C88.0295 142.884 89.9159 141.651 91.0089 139.791L91.0112 139.786L91.0242 139.764C92.089 137.901 92.2277 135.64 91.3836 133.659L91.3684 133.624C87.5998 124.939 87.3893 114.857 91.4258 105.637L128.595 20.7369C134.105 8.14943 146.558 0 160.313 0C174.068 0 186.522 8.13123 192.031 20.7379L229.184 105.599L229.201 105.636C233.256 114.857 233.026 124.939 229.258 133.624C228.398 135.612 228.512 137.887 229.6 139.761L229.605 139.769C230.676 141.641 232.588 142.883 234.728 143.131L234.829 143.143H234.832C244.205 144.238 253.001 149.091 258.948 157.173L313.889 231.818L311.421 233.635L256.48 158.989C251.031 151.585 242.971 147.154 234.383 146.177L234.281 146.165L234.271 146.163C231.225 145.777 228.493 143.994 226.947 141.294C225.362 138.561 225.209 135.265 226.446 132.406V132.405C229.883 124.486 230.094 115.308 226.411 106.906L226.41 106.904L226.395 106.87L226.393 106.866L189.223 21.966C184.202 10.4778 172.852 3.06462 160.313 3.06462ZM149.903 40.0001C151.741 35.8908 155.82 33.2201 160.332 33.2201C164.865 33.2201 168.961 35.9152 170.787 40.0566L170.79 40.0637L170.792 40.0683L203.993 114.006L204.02 114.058L204.038 114.107C205.594 117.714 205.257 121.889 203.085 125.199C200.912 128.51 197.233 130.504 193.253 130.504H128.392C124.435 130.504 120.735 128.514 118.561 125.199C116.38 121.877 116.049 117.684 117.624 114.068L118.426 112.227H118.445L149.898 40.0102L149.903 40.0001ZM160.332 36.2847C157.023 36.2847 154.02 38.2549 152.68 41.2968L152.654 41.3567L152.653 41.3596L120.453 115.291H120.434C119.267 117.969 119.516 121.069 121.123 123.517C122.729 125.966 125.465 127.44 128.392 127.44H193.253C196.199 127.44 198.916 125.966 200.523 123.517C202.129 121.069 202.378 117.97 201.211 115.292L167.986 41.2988L167.983 41.2929M125.796 158.584C127.903 154.959 131.772 152.679 136.02 152.679H185.587C189.788 152.679 193.695 154.898 195.817 158.573C197.929 162.23 197.937 166.726 195.818 170.378C195.816 170.382 195.814 170.385 195.812 170.388L195.804 170.402L195.782 170.442L195.735 170.515L170.498 209.449C168.381 213.033 164.535 215.284 160.313 215.284C156.118 215.284 152.235 213.055 150.114 209.442L125.851 170.5L125.815 170.445L125.786 170.391C123.673 166.743 123.676 162.227 125.796 158.584ZM136.02 155.743C132.882 155.743 130.013 157.427 128.445 160.124C126.876 162.821 126.876 166.169 128.445 168.867L128.446 168.869L152.737 207.857L152.748 207.876C154.319 210.563 157.202 212.22 160.313 212.22C163.44 212.22 166.3 210.548 167.872 207.868L167.89 207.838L193.156 168.858L193.157 168.857L193.162 168.848C194.732 166.15 194.731 162.821 193.163 160.105C191.595 157.389 188.706 155.743 185.587 155.743H136.02ZM81.4492 173.865C83.7905 170.7 87.5655 168.876 91.5462 169.107C95.5078 169.319 99.0715 171.52 101.059 174.943V174.944L101.06 174.945L101.064 174.953L101.065 174.954L101.091 174.998L101.096 175.006L101.098 175.008L101.102 175.016L132.895 228.741L132.897 228.743L132.998 228.911L133.006 228.926C134.999 232.37 135.104 236.569 133.317 240.093L132 242L130.869 243.322C129.037 245.044 126.674 246.152 124.119 246.439L124.034 246.448H124.032L44.9114 255.692L44.9026 255.693H44.9013M130.243 239.378L130.584 238.707C131.902 236.108 131.827 233.014 130.36 230.472C130.358 230.468 130.356 230.465 130.354 230.462L130.344 230.445L130.338 230.435L130.333 230.427L130.325 230.415L98.483 176.607L98.4781 176.599L98.4715 176.588L98.4709 176.586L98.4264 176.513L98.4192 176.5L98.4185 176.499L98.4035 176.475L98.3967 176.462C96.9212 173.935 94.2922 172.321 91.3784 172.167H91.3703C88.4511 171.997 85.6657 173.329 83.9248 175.671L83.913 175.687M83.913 175.687L36.8783 239.458C34.9409 242.131 34.7432 245.682 36.3974 248.534C38.0617 251.404 41.2754 253.011 44.566 252.647L44.5767 252.646L44.5863 252.645L123.854 243.384H123.859C126.148 243.105 128.217 241.937 129.624 240.16L130.243 239.378M101.09 174.999L101.083 174.984L101.07 174.962C101.075 174.972 101.082 174.984 101.09 174.999L100.911 175.108L101.037 175.042M240.184 173.823C237.83 170.67 234.069 168.901 230.131 169.107C226.169 169.314 222.604 171.511 220.613 174.931C220.606 174.942 220.6 174.952 220.595 174.961V174.962L220.572 175V175.001L220.566 175.011L187.736 228.796L187.729 228.808L187.697 228.862L187.692 228.87L187.688 228.876L187.686 228.881L187.676 228.896L187.664 228.917C185.659 232.354 185.565 236.554 187.345 240.085C189.135 243.641 192.605 246.017 196.525 246.458L196.61 246.467H196.612L274.751 255.714L274.771 255.715C278.656 256.133 282.422 254.544 284.84 251.598H285.043L285.925 250.058C288.165 246.152 287.913 241.282 285.242 237.625C285.24 237.622 285.239 237.62 285.237 237.617L285.235 237.615L285.232 237.611M285.227 237.604L285.23 237.608L240.274 173.946L240.229 173.876L240.184 173.823M240.274 173.946L240.255 173.919L239.003 174.803L240.292 173.974L240.274 173.946ZM230.291 172.167C227.381 172.319 224.754 173.928 223.276 176.447L223.269 176.461L223.239 176.512L223.232 176.523L223.201 176.576L223.2 176.577L223.195 176.586L223.188 176.596L190.384 230.34L190.381 230.346L190.303 230.475L190.299 230.481C188.837 233.002 188.764 236.093 190.081 238.707C191.388 241.301 193.914 243.052 196.786 243.403H196.792L275.048 252.663H275.054L275.08 252.666C278.132 253.002 281.086 251.645 282.833 249.18L283.166 248.711L283.266 248.535C284.908 245.671 284.722 242.102 282.762 239.426C282.755 239.416 282.749 239.408 282.744 239.401L282.746 239.403L282.759 239.42C282.75 239.409 282.743 239.399 282.738 239.391L282.733 239.385L282.728 239.378L282.724 239.371L282.719 239.364L282.716 239.36L237.762 175.702L237.751 175.687C236.011 173.334 233.218 172.014 230.291 172.167ZM223.296 176.408C223.297 176.406 223.297 176.406 223.296 176.408ZM81.4348 173.884L34.5358 237.471L34.534 237.473L34.4454 237.593C31.7608 241.242 31.4634 246.135 33.7464 250.072C36.0234 253.998 40.4103 256.187 44.8954 255.694"
                    fill="#E6E6E6"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M160.313 3.06462C147.776 3.06462 136.425 10.4932 131.403 21.9658L94.2332 106.866C90.5624 115.251 90.7388 124.407 94.1403 132.313L94.1798 132.404L94.181 132.407C95.4238 135.279 95.233 138.559 93.6984 141.261L93.6893 141.278L93.6731 141.306C92.1233 143.969 89.4389 145.762 86.387 146.158L86.3767 146.161L86.2436 146.177C77.6547 147.154 69.5957 151.584 64.1469 158.989L9.20553 233.634C1.7789 243.729 1.02714 257.258 7.28508 268.122C13.5637 278.97 25.6677 285.091 38.1176 283.714L130.227 273.46L130.311 273.451C139.407 272.419 147.239 267.666 152.355 260.744C154.215 258.217 157.179 256.722 160.313 256.722C163.461 256.722 166.391 258.227 168.259 260.726L168.269 260.739C168.271 260.742 168.273 260.746 168.276 260.749C173.406 267.689 181.269 272.448 190.398 273.46L282.426 283.705H282.428L282.511 283.714H282.513C294.958 285.108 307.059 278.992 313.338 268.127C319.599 257.262 318.849 243.73 311.421 233.635L313.889 231.819C322.039 242.894 322.861 257.74 315.994 269.657L314.671 268.895L315.993 269.659C309.12 281.552 295.885 288.262 282.258 286.769H282.256L282.172 286.76L190.06 276.506C180.055 275.397 171.427 270.174 165.804 262.56L165.796 262.551L165.794 262.548C164.493 260.815 162.47 259.786 160.313 259.786C158.151 259.786 156.105 260.819 154.823 262.561L154.821 262.563C149.197 270.175 140.57 275.397 130.566 276.506L130.482 276.515L38.4556 286.76C24.7967 288.271 11.5195 281.556 4.63271 269.658L4.63118 269.655C-2.2349 257.738 -1.41176 242.894 6.73698 231.818L61.6785 157.173C67.6186 149.1 76.4009 144.249 85.7626 143.147L85.7659 143.146L85.8975 143.131C88.0295 142.884 89.9159 141.651 91.0089 139.791L91.0112 139.786L91.0242 139.764C92.089 137.901 92.2277 135.64 91.3836 133.659L91.3684 133.624C87.5998 124.939 87.3893 114.857 91.4258 105.637L128.595 20.7369C134.105 8.14943 146.558 0 160.313 0C174.068 0 186.522 8.13123 192.031 20.7379L229.184 105.599L229.201 105.636C233.256 114.857 233.026 124.939 229.258 133.624C228.398 135.612 228.512 137.887 229.6 139.761L229.605 139.769C230.676 141.641 232.588 142.883 234.728 143.131L234.829 143.143H234.832C244.205 144.238 253.001 149.091 258.948 157.173L313.889 231.818L311.421 233.635L256.48 158.989C251.031 151.585 242.971 147.154 234.383 146.177L234.281 146.165L234.271 146.163C231.225 145.777 228.493 143.994 226.947 141.294C225.362 138.561 225.209 135.265 226.446 132.406V132.405C229.883 124.486 230.094 115.308 226.411 106.906L226.41 106.904L226.395 106.87L226.393 106.866L189.223 21.966C184.202 10.4778 172.852 3.06462 160.313 3.06462ZM149.903 40.0001C151.741 35.8908 155.82 33.2201 160.332 33.2201C164.865 33.2201 168.961 35.9152 170.787 40.0566L170.79 40.0637L170.792 40.0683L203.993 114.006L204.02 114.058L204.038 114.107C205.594 117.714 205.257 121.889 203.085 125.199C200.912 128.51 197.233 130.504 193.253 130.504H128.392C124.435 130.504 120.735 128.514 118.561 125.199C116.38 121.877 116.049 117.684 117.624 114.068L118.426 112.227H118.445L149.898 40.0102L149.903 40.0001ZM160.332 36.2847C157.023 36.2847 154.02 38.2549 152.68 41.2968L152.654 41.3567L152.653 41.3596L120.453 115.291H120.434C119.267 117.969 119.516 121.069 121.123 123.517C122.729 125.966 125.465 127.44 128.392 127.44H193.253C196.199 127.44 198.916 125.966 200.523 123.517C202.129 121.069 202.378 117.97 201.211 115.292L167.986 41.2988L167.983 41.2929M125.796 158.584C127.903 154.959 131.772 152.679 136.02 152.679H185.587C189.788 152.679 193.695 154.898 195.817 158.573C197.929 162.23 197.937 166.726 195.818 170.378C195.816 170.382 195.814 170.385 195.812 170.388L195.804 170.402L195.782 170.442L195.735 170.515L170.498 209.449C168.381 213.033 164.535 215.284 160.313 215.284C156.118 215.284 152.235 213.055 150.114 209.442L125.851 170.5L125.815 170.445L125.786 170.391C123.673 166.743 123.676 162.227 125.796 158.584ZM136.02 155.743C132.882 155.743 130.013 157.427 128.445 160.124C126.876 162.821 126.876 166.169 128.445 168.867L128.446 168.869L152.737 207.857L152.748 207.876C154.319 210.563 157.202 212.22 160.313 212.22C163.44 212.22 166.3 210.548 167.872 207.868L167.89 207.838L193.156 168.858L193.157 168.857L193.162 168.848C194.732 166.15 194.731 162.821 193.163 160.105C191.595 157.389 188.706 155.743 185.587 155.743H136.02ZM81.4492 173.865C83.7905 170.7 87.5655 168.876 91.5462 169.107C95.5078 169.319 99.0715 171.52 101.059 174.943V174.944L101.06 174.945L101.064 174.953L101.065 174.954L101.091 174.998L101.096 175.006L101.098 175.008L101.102 175.016L132.895 228.741L132.897 228.743L132.998 228.911L133.006 228.926C134.999 232.37 135.104 236.569 133.317 240.093L132 242L130.869 243.322C129.037 245.044 126.674 246.152 124.119 246.439L124.034 246.448H124.032L44.9114 255.692L44.9026 255.693H44.9013M130.243 239.378L130.584 238.707C131.902 236.108 131.827 233.014 130.36 230.472C130.358 230.468 130.356 230.465 130.354 230.462L130.344 230.445L130.338 230.435L130.333 230.427L130.325 230.415L98.483 176.607L98.4781 176.599L98.4715 176.588L98.4709 176.586L98.4264 176.513L98.4192 176.5L98.4185 176.499L98.4035 176.475L98.3967 176.462C96.9212 173.935 94.2922 172.321 91.3784 172.167H91.3703C88.4511 171.997 85.6657 173.329 83.9248 175.671L83.913 175.687M83.913 175.687L36.8783 239.458C34.9409 242.131 34.7432 245.682 36.3974 248.534C38.0617 251.404 41.2754 253.011 44.566 252.647L44.5767 252.646L44.5863 252.645L123.854 243.384H123.859C126.148 243.105 128.217 241.937 129.624 240.16L130.243 239.378M101.09 174.999L101.083 174.984L101.07 174.962C101.075 174.972 101.082 174.984 101.09 174.999L100.911 175.108L101.037 175.042M240.184 173.823C237.83 170.67 234.069 168.901 230.131 169.107C226.169 169.314 222.604 171.511 220.613 174.931C220.606 174.942 220.6 174.952 220.595 174.961V174.962L220.572 175V175.001L220.566 175.011L187.736 228.796L187.729 228.808L187.697 228.862L187.692 228.87L187.688 228.876L187.686 228.881L187.676 228.896L187.664 228.917C185.659 232.354 185.565 236.554 187.345 240.085C189.135 243.641 192.605 246.017 196.525 246.458L196.61 246.467H196.612L274.751 255.714L274.771 255.715C278.656 256.133 282.422 254.544 284.84 251.598H285.043L285.925 250.058C288.165 246.152 287.913 241.282 285.242 237.625C285.24 237.622 285.239 237.62 285.237 237.617L285.235 237.615L285.232 237.611M285.227 237.604L285.23 237.608L240.274 173.946L240.229 173.876L240.184 173.823M240.274 173.946L240.255 173.919L239.003 174.803L240.292 173.974L240.274 173.946ZM230.291 172.167C227.381 172.319 224.754 173.928 223.276 176.447L223.269 176.461L223.239 176.512L223.232 176.523L223.201 176.576L223.2 176.577L223.195 176.586L223.188 176.596L190.384 230.34L190.381 230.346L190.303 230.475L190.299 230.481C188.837 233.002 188.764 236.093 190.081 238.707C191.388 241.301 193.914 243.052 196.786 243.403H196.792L275.048 252.663H275.054L275.08 252.666C278.132 253.002 281.086 251.645 282.833 249.18L283.166 248.711L283.266 248.535C284.908 245.671 284.722 242.102 282.762 239.426C282.755 239.416 282.749 239.408 282.744 239.401L282.746 239.403L282.759 239.42C282.75 239.409 282.743 239.399 282.738 239.391L282.733 239.385L282.728 239.378L282.724 239.371L282.719 239.364L282.716 239.36L237.762 175.702L237.751 175.687C236.011 173.334 233.218 172.014 230.291 172.167ZM223.296 176.408C223.297 176.406 223.297 176.406 223.296 176.408ZM81.4348 173.884L34.5358 237.471L34.534 237.473L34.4454 237.593C31.7608 241.242 31.4634 246.135 33.7464 250.072C36.0234 253.998 40.4103 256.187 44.8954 255.694"
                    fill="url(#paint0_linear_2142_2318)"
                />
            </g>
            <defs>
                <linearGradient
                    id="paint0_linear_2142_2318"
                    x1="288.07"
                    y1="83.0717"
                    x2="159.581"
                    y2="408.498"
                    gradientUnits="userSpaceOnUse"
                    className="tk-gradient"
                >
                    <stop stopColor="#E6E6E6" />
                    <stop offset="0.220002" stopColor="#E81899" />
                    <stop offset="0.423162" stopColor="#E6E6E6" />
                    <stop offset="1" stopColor="#E6E6E6" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default TaikoIcon;
