import {DefaultOptions, Options, ShortcutCache} from './types';
import { keyCode, modifierKey } from './key-code'
import { sys } from './utils/index';

let _cache:WeakMap<HTMLElement, ShortcutFlow> = new WeakMap()

class ShortcutFlow {
    public target:HTMLElement
    public os:string
    public storage:ShortcutCache

    constructor(target:HTMLElement = document.documentElement, options?:DefaultOptions) {
        if(_cache.has(target)) return _cache.get(target)
        this.target = target
        this.os = options?.os || sys()
        this.target.addEventListener('keydown', (e) => {
            console.log(e)
        })
        console.log(keyCode['lmeta'], modifierKey.get('meta')[this.os === 'Mac' ? 1 : 0])
        _cache.set(target, this)
    }

    addShortcut(keyCombo:string[], listener:Function, options?:Options):void {
        console.log(options)
    }

    removeShortcut(keyCombo:string[], listener:Function, options?:Options):Boolean {
        console.log(options)
        return false
    }

    getAllShortcut():Array<Array<string>> {
        return [[''], ['']]
    }

    getHandler(keyCombo:string[]):Function {
        return () => {}
    }
}

export default ShortcutFlow
