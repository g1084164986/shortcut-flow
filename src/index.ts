import { DefaultOptions, Options, ShortcutCache } from './types';
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
    /**
     * 添加快捷键
     *
     * @param keyCombo
     * @param listener
     * @param options
     */
    addShortcut(keyCombo:string[], listener:Function, options?:Options):void {
        console.log(options)
    }

    /**
     * 删除快捷键
     * @param keyCombo
     * @param listener
     */
    removeShortcut(keyCombo:string[], listener?:Function):Boolean {
        return false
    }

    /**
     * 获取快捷键列表
     */
    getAllShortcut():string[][] {
        return [[''], ['']]
    }

    /**
     * 获取快捷键下的监听器
     *
     * @param keyCombo
     */
    getHandler(keyCombo:string[]):Function[] {
        return []
    }
}

export default ShortcutFlow
