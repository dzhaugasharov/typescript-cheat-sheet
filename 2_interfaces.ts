interface Rect {
    readonly id: string
    color?: string // ? - optionnal
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '1234',
    size: {
        width: 29,
        height: 30
    },
    color: '#CCC'
}

const rect2: Rect = {
    id: '3',
    size: {
        width: 3,
        height: 5
    }
}
rect2.color = 'green'

const rect3 = {} as Rect
const rect4 = <Rect>{}



// ========= extending ============

interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '134',
    size: {
        width: 45,
        height: 83
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}


// ======== implementing ====
interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()
    setTime(date: Date): void {
        
    }
}


// ==========================
interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '3px'
}