import React from 'react';
import Theme from './../themes/getStyle';

export default function getObjectName(props) {
    const {
        parent_type,
        namespace,
        quotesOnKeys,
        theme,
        jsvRoot,
        name,
        displayArrayKey
    } = props;

    let display_name = props.name ? props.name : '';

    if (jsvRoot && (name === false || name === null)) {
        return <span />;
    } else if (parent_type == 'array') {
        return displayArrayKey ? (
            <span {...Theme(theme, 'array-key')} key={namespace}>
                <span class="array-key">{display_name}</span>
                <span {...Theme(theme, 'colon')}>:</span>
            </span>
        ) : (
            <span />
        );
    } else {
        if(props.type === 'object') {
            const
                targetHeader1 = props.src.sourceComponent,
                targetHeader2 = props.src.activityDescription
            
            /* console.log("ON props--", props.src)
            console.log("first key--", props.src[
                Object.keys(props.src)[0]
            ]) */

            if(targetHeader1) {
                display_name = targetHeader1 }
            if(targetHeader2) display_name += (
                ' - ' + targetHeader2 )
        }

        return (
            <span {...Theme(theme, 'object-name')} key={namespace}>
                <span class="object-key">
                    {quotesOnKeys && (
                        <span style={{ verticalAlign: 'top' }}>"</span>
                    )}
                    <span>{display_name}</span>
                    {quotesOnKeys && (
                        <span style={{ verticalAlign: 'top' }}>"</span>
                    )}
                </span>
                <span {...Theme(theme, 'colon')}>:</span>
            </span>
        );
    }
}
