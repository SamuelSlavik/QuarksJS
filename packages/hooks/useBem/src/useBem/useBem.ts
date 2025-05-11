import { useState } from 'react';

type Rules = string | string[] | Record<string, boolean>;

export function useBem(blockName: string) {
    const [base] = useState<string>(blockName);

    const getClassNameFromRules = (
        rules: Rules,
        concatenationString: '--' | '__'
    ): string => {
        if (typeof rules === 'string' && rules !== '') {
            return `${base}${concatenationString}${element}`;
        }

        if (Array.isArray(rules)) {
            return rules
                .map((rule) => `${base}${concatenationString}${rule}`)
                .join(' ');
        }

        if (typeof rules === 'object' && rules !== null) {
            return (
                Object.entries(rules)
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    .filter(([_, value]) => value)
                    .map(([key]) => `${base}${concatenationString}${key}`)
                    .join(' ')
            );
        }

        return '';
    };

    // (string|Object<string, boolean>|[string])
    // bem() -> return base
    // bem('card') -> rettrns base__card
    // bem('card', 'active') returns 'base__card base__card--active'
    // bem('card', {active: true}') returns the same
    // bem({card: true, placeholder: true}, {active: true}) returns 'base__card base__placeholder base__card--active base__placeholder--active'
    //
    // bem([Modifier('active', true), Element('card': true)]) returns 'base--blue base__card'
    //
    const bem = (rules: Rules): string => {
        if (typeof rules === 'string' && rules !== '') {
            return rules;
        }

        if (Array.isArray(rules)) {
            return rules.join(' ');
        }

        if (typeof rules === 'object' && rules !== null) {
            return (
                Object.entries(rules)
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    .filter(([_, value]) => value)
                    .join(' ')
            );
        }

        return base;
    };

    const block = (): string => {
        return base;
    };

    const element = (rules?: Rules): string => {
        return getClassNameFromRules(rules, '__') || base;
    };

    const modifier = (rules: Rules): string => {
        return getClassNameFromRules(rules, '--');
    };

    return [bem, block, element, modifier];
}
