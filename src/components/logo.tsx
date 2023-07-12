import * as React from 'react';

interface LogoProps {
    color?: string;
    width?: number;
    height?: number;
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ width, height, color, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        preserveAspectRatio="xMidYMid"
        viewBox="0 0 309.75 181.5"
        fill={color}
        className={className}
        stroke="white"
        strokeWidth={5}
    >
        <path d="M138.798.968c-2.988.443-8.153 2.66-11.7 5.05-3.18 2.139-6.9 5.261-9 7.555l-.713.79 3.083 2.737 3.103 2.737 1.947-1.85c5.513-5.205 11.218-8.423 15.708-8.847 7.749-.771 13.492 8.442 16.345 26.25.983 6.226.944 5.725.52 6.458-.231.347-3.623 7.054-7.574 14.898s-8.288 16.422-9.637 19.082c-1.35 2.64-4.684 9.232-7.42 14.648-2.738 5.397-6.458 12.779-8.289 16.383-3.681 7.266-8.885 17.54-15.226 30.067-2.313 4.549-5.609 11.064-7.324 14.456s-5.493 10.851-8.385 16.575-5.32 10.486-5.396 10.601c-.077.097-.328.598-.54 1.099l-.405.925h9.367l3.046-6.033c1.657-3.296 4.683-9.27 6.707-13.241 2.005-3.97 5.32-10.524 7.363-14.552s5.435-10.736 7.536-14.88l3.835-7.574h22.32c17.674 0 22.338.058 22.396.231.039.135.347 2.236.675 4.684.327 2.428.81 5.782 1.08 7.42s.809 5.32 1.233 8.192c.674 4.722 1.137 7.227 2.043 11.179.154.732.77 2.814 1.33 4.625 3.565 11.237 8.846 17.675 16.228 19.795 2.159.616 7.074.636 9.54.019 4.241-1.08 9.349-3.836 13.936-7.536 1.638-1.33 5.686-5.223 5.686-5.493 0-.077-.328-.424-.713-.771s-1.677-1.465-2.834-2.506c-1.175-1.06-2.255-1.946-2.39-2.004-.115-.058-.983.616-1.908 1.484-6.9 6.534-13.761 9.83-18.464 8.866-1.696-.347-3.065-1.08-4.568-2.487-3.74-3.45-6.727-10.465-8.52-19.967-.27-1.388-.52-2.64-.577-2.795s-.463-2.891-.887-6.071c-.443-3.18-.925-6.515-1.08-7.42-.173-.907-.674-4.338-1.137-7.614-1.966-13.974-2.794-19.717-2.987-20.623-.173-.848-1.812-12.393-2.062-14.456-.174-1.349-1.986-14.224-2.95-20.912-.52-3.547-1.426-9.791-2.004-13.877s-1.118-7.594-1.175-7.806-.482-3.161-.964-6.554c-1.369-9.983-2.159-14.127-3.624-19.196-2.679-9.213-6.591-15.593-11.699-19.062-1.58-1.08-4.549-2.294-6.341-2.622-1.638-.289-4.703-.308-6.534-.057zm22.55 60.077c.386 2.717 1.1 7.728 1.581 11.12s1.06 7.21 1.272 8.481c.347 2.178 1.04 7.247 1.542 11.565.116 1.06.308 2.274.405 2.698s.578 3.662 1.06 7.208.906 6.496.944 6.573c.058.096 1.06 6.958 1.06 7.266 0 .039-8.808.058-19.563.058s-19.563-.058-19.563-.135c0-.135 3.277-6.688 8.673-17.308a5146.868 5146.868 0 0 0 7.71-15.226c2.583-5.089 6.13-12.124 7.902-15.612 1.774-3.508 3.855-7.614 4.607-9.136.77-1.523 1.445-2.699 1.522-2.621.078.057.463 2.35.849 5.069zM32.579 60.871C15.252 78.237 1.027 92.538.989 92.673c-.039.116 14.147 14.475 31.551 31.88L64.15 156.2l3.006-2.987c1.639-1.638 2.969-3.045 2.95-3.123-.04-.096-12.933-13.029-28.642-28.737L12.862 92.75l28.217-28.236c15.496-15.535 28.41-28.487 28.68-28.757l.462-.52-2.968-2.969c-1.638-1.638-3.026-2.987-3.084-2.987-.058.02-14.282 14.224-31.59 31.59zM242.646 32.268l-2.968 2.969.463.52c.27.27 13.183 13.222 28.68 28.757l28.216 28.236-28.602 28.603c-15.708 15.708-28.603 28.641-28.641 28.737-.02.078 1.31 1.485 2.949 3.123l3.006 2.987 31.59-31.628c17.386-17.405 31.61-31.725 31.61-31.822 0-.173-63.065-63.469-63.238-63.469-.058 0-1.426 1.35-3.065 2.987z" />
    </svg>
);
export default Logo;
