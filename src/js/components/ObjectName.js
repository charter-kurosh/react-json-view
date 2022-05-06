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
        displayArrayKey,
        displayHeaderFromKeys
    } = props;

    let display_name = props.name ? props.name : '';
    const headers = []

    if(displayHeaderFromKeys && props.type === 'object') {
        for(const key of displayHeaderFromKeys) {
            if(props.src[key]) headers.push(props.src[key])
        }
    }

    if (jsvRoot && (name === false || name === null)) {
        return <span />;
    } else if ( headers.length > 0 ) {
        display_name = headers.join(' - ')
        return objectContent({...props, display_name})
    }
    else if (parent_type == 'array') {
        return displayArrayKey ? (
            <span {...Theme(theme, 'array-key')} key={namespace}>
                <span class="array-key">{display_name}</span>
                <span {...Theme(theme, 'colon')}>:</span>
            </span>
        ) : (
            <span />
        );
    } else return objectContent({...props, display_name})
}


function objectContent({display_name, namespace, quotesOnKeys, theme}) {
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
    )
}