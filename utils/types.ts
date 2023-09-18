export interface GameData {
    [key: string]: {
        ranks: {
            name: string,
            image: string
        }[],
        imageSizeMultiplierHeight: number,
        imageSizeMultiplierWidth: number
    }
}

export interface ReactSelectType {
    label: string,
    value: string
}