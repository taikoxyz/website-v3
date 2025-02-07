import React from "react";
import clsx from "clsx";
import { ISelectDefaultItem, ISelectProps } from "../../types";
import { WithSelect } from "../../provider/with-select";
import { SelectLabel } from "../select-label";
import { SelectDropdown } from "../select-dropdown";
import { SelectContainer } from "../select-container";
import { useSelect } from "../../provider";
import { useClickOutside } from "shared/lib/hooks/use-click-outside";
import css from "./select.module.scss";

export const SelectWrapper = <T extends ISelectDefaultItem | object>({
    renderKey = 'value',
    renderName = 'name',
    ...props
}: ISelectProps<T>) => {
    const { setState } = useSelect();
    const ref = useClickOutside(() => setState({ active: false }));

    const defaultProps = {
        ...props,
        renderKey,
        renderName,
    } as any;

    return (
        <div 
            className={clsx(
                css.root,
                props.classNames?.root || css.default,
                props.disabled && css.disabled
            )} 
            ref={ref}
            data-select
        >
            <SelectLabel {...defaultProps} />
            <SelectContainer {...defaultProps} />
            <SelectDropdown {...defaultProps} />
        </div>
    );
};

export const Select = <T extends ISelectDefaultItem | object>(props: ISelectProps<T>) => (
    <WithSelect>
        <SelectWrapper {...props as any} />
    </WithSelect>
)