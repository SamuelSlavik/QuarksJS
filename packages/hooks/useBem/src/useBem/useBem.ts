import { useState } from 'react';

export function useBem(blockName: string) {
    const [base, setBase] = useState<string>(blockName);

    // (string|Object<string, boolean>|[string])
    // bem() -> return base
    // bem('card') -> rettrns base__card
    // bem('card', 'active') returns 'base__card base__card--active'
    // bem('card', {active: true}') returns the same
    // bem({card: true}, {active: true}) returns the same
    // bem([Modifier{'blue'}, Element{'card'}]) returns 'base--blue base__card'
    //
    const bem = (): string => {
        return base;
    };

    const block = (): string => {
        return base;
    };

    const element = (
        element?: string | string[] | Record<string, boolean>
    ): string => {
        if (typeof element === 'string') {
            return `${base}--${element}`;
        }

        if (Array.isArray(element)) {
            return element.map((element) => `${base}__${element}`).join(' ');
        }

        if (typeof element === 'object' && element !== null) {
            return (
                Object.entries(element)
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    .filter(([_, value]) => value)
                    .map(([key]) => `${base}__${key}`)
                    .join(' ')
            );
        }

        return base;
    };

    const modifier = (
        modifier: string | string[] | Record<string, boolean>
    ): string => {
        if (typeof modifier === 'string') {
            return `${base}--${modifier}`;
        }

        if (Array.isArray(modifier)) {
            return modifier.map((modifier) => `${base}--${modifier}`).join(' ');
        }

        if (typeof modifier === 'object' && modifier !== null) {
            return (
                Object.entries(modifier)
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    .filter(([_, value]) => value)
                    .map(([key]) => `${base}--${key}`)
                    .join(' ')
            );
        }

        return '';
    };

    return [bem, block, element, modifier];
}
