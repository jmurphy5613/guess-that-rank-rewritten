
interface GithubIconProps {
    stroke?: string;
}

const GithubIcon: React.FC<GithubIconProps> = ({ stroke = '#fff' }) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M256 6.31C114.6 6.31 0 120.91 0 262.31C0 375.37 73.36 471.32 175.06 505.26C187.82 507.64 192.59 499.65 192.59 492.92C192.59 486.75 192.31 466.69 192.31 445.23C121.05 460.66 106.04 415.07 106.04 415.07C94.4 385.47 77.56 377.62 77.56 377.62C54.27 361.77 79.24 362.05 79.24 362.05C104.91 363.87 118.52 388.42 118.52 388.42C141.38 427.56 178.42 416.19 193.01 409.74C195.25 393.19 201.99 381.97 209.28 375.51C152.47 369.06 92.57 347.03 92.57 248.98C92.57 221.07 102.53 198.2 118.94 180.25C116.27 173.8 107.58 147.71 121.46 112.5C121.46 112.5 142.92 105.63 191.88 138.73C212.36 133.12 234.24 130.17 255.99 130.17C277.73 130.31 299.62 133.12 320.1 138.73C368.92 105.63 390.38 112.5 390.38 112.5C404.27 147.71 395.57 173.8 392.9 180.25C409.31 198.21 419.27 221.07 419.27 248.98C419.27 347.31 359.37 368.91 302.42 375.23C311.54 383.23 319.81 398.8 319.81 422.64C319.81 456.87 319.53 484.5 319.53 492.92C319.53 499.79 324.16 507.65 337.06 505.26C438.78 471.32 512 375.51 512 262.31C512 120.91 397.4 6.31 256 6.31Z" fill={stroke} />
            <path d="M96.93 373.83C96.37 375.09 94.41 375.51 92.58 374.67C90.76 373.83 89.63 372.15 90.34 370.88C90.9 369.62 92.86 369.2 94.69 370.04C96.51 370.88 97.63 372.57 96.93 373.83Z" fill={stroke} />
            <path d="M107.31 385.47C106.05 386.59 103.66 386.03 102.12 384.35C100.44 382.53 100.16 380.14 101.42 379.02C102.68 377.9 104.93 378.46 106.61 380.14C108.29 381.96 108.57 384.35 107.31 385.47Z" fill={stroke} />
            <path d="M117.41 400.2C115.87 401.32 113.34 400.34 111.66 397.96C110.12 395.72 110.12 392.91 111.66 391.79C113.2 390.67 115.73 391.65 117.41 393.89C119.09 396.27 119.09 399.08 117.41 400.2Z" fill={stroke} />
            <path d="M131.3 414.37C129.9 415.91 126.95 415.49 124.71 413.39C122.47 411.29 121.9 408.34 123.31 406.8C124.72 405.26 127.8 405.68 129.9 407.78C132.14 410.02 132.7 412.96 131.3 414.37Z" fill={stroke} />
            <path d="M150.37 422.64C149.81 424.6 146.86 425.59 143.92 424.74C140.97 423.9 139.15 421.51 139.71 419.55C140.27 417.59 143.22 416.6 146.16 417.45C148.97 418.29 150.93 420.68 150.37 422.64Z" fill={stroke} />
            <path d="M171.27 424.19C171.41 426.29 168.89 428.12 165.8 428.12C162.71 428.26 160.33 426.44 160.19 424.33C160.19 422.23 162.57 420.4 165.66 420.4C168.75 420.4 171.27 422.08 171.27 424.19Z" fill={stroke} />
            <path d="M190.77 420.96C191.19 423.06 189.09 425.17 186 425.73C183.05 426.29 180.25 425.03 179.97 422.92C179.55 420.82 181.79 418.71 184.74 418.15C187.69 417.59 190.35 418.86 190.77 420.96Z" fill={stroke} />
        </svg>

    )
}

export default GithubIcon