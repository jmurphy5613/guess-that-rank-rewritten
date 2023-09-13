export interface GameRanks {
    [key: string]: {
        ranks: {
            name: string,
            image: string
        }[]
    }
}

export interface ReactSelectType {
    label: string,
    value: string
}