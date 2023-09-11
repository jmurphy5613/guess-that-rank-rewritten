

interface UpArrowProps {
    stroke?: string;
}

const UpArrow: React.FC<UpArrowProps> = ({ stroke = '#fff' }) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 25L20 15L10 25" stroke={stroke} />
        </svg>
    )
}

export default UpArrow