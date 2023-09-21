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

export interface Guess {
    clipId: string,
    game: string,
    rankGuessed: string,
    correctRank: string
}