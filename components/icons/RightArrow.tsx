
interface RightArrowProps {
    stroke?: string;
}

const RightArrow = ({ stroke = '#fff' }: RightArrowProps) => (
    <svg width="100%" height="100%" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.125 8.75L21.875 17.5L13.125 26.25" stroke={stroke} />
    </svg>
)

export default RightArrow;