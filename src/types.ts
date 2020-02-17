import { keyCode } from './key-code'

type OS = 'Win' | 'Mac'   //自定义系统键位
type ModifierKey = 'meta' | 'alt' | 'shift' | 'ctrl' |
        'metaShift' | 'ctrlShift' | 'altShift' |
        'metaAlt' | 'ctrlAlt' | 'ctrlAltShift'

type _ShortcutSubType = {
    [key in keyCode]: Function
}

type ShortcutCache = {
    [key in ModifierKey]:_ShortcutSubType
}

interface DefaultOptions {
    os: OS,
    preventDefault:boolean,
    stopPropagation:boolean,
    useCapture:boolean
}

interface Options {
    preventDefault:boolean,
    stopPropagation:boolean,
    useCapture:boolean
}

export { OS, DefaultOptions, Options, ShortcutCache }
