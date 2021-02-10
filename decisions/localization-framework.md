# Options for localization

- [ ] react-intl
- [x] React-i18next



## ❌ React-intl

A library lets us translate the text on the website without thinking too much about structuring og the translation as this is handled with babel and webpack configuration.

#### Pros

- One uniform way of handling translation.
- easy to set default message
- component layout
- auto-generates translation files for very easy translation to other languages



#### Cons

- Takes a lot of space and wrapping og formatting
- No one-liner



### Usage

```js
<FormattedMessage
	id="myMessage"
	defaultMessage="Today is {ts, date, ::yyyyMMdd}"
	values={{ts: Date.now()}}
	/>
```



## ✓ react-i18next

Simplifies translation for a application. 

#### Pros

+ many ways to use it
+ even allows for namespacing which translations to use
+ no need to change your webpack configuration or add additional babel transpilers, just use create-react-app and go.
+ offers serverside translation too.

#### Cons

- does not auto-generate translation files

### Usage

##### Using hooks - ✅ preferred way to use for anovote

```javascript
import React from 'react';

// the hook
import { useTranslation } from 'react-i18next';

function MyComponent () {
  const { t, i18n } = useTranslation();
  return <h1>{t('Welcome to React')}</h1>
}
```

##### Using HOC - Higher Order Components

```javascript
import React from 'react';

// the hoc
import { withTranslation } from 'react-i18next';

function MyComponent ({ t }) {
  return <h1>{t('Welcome to React')}</h1>
}

export default withTranslation()(MyComponent);
```

##### Using render props

```javascript
import React from 'react';

// the render prop
import { Translation } from 'react-i18next';

export default function MyComponent () {
  return (
    <Translation>
      {
        t => <h1>{t('Welcome to React')}</h1>
      }
    </Translation>
  )
}
```

##### Using trans components - ✓ can be used

```javascript
import React from 'react';
import { Trans } from 'react-i18next';

export default function MyComponent () {
  return <Trans><H1>Welcome to React</H1></Trans>
}

// the translation in this case should be
"<0>Welcome to React</0>": "<0>Welcome to React and react-i18next</0>"
```



## Decision

Framework to use for lacalization

### 🎉 react-i18next 🎉

##### Preferred way of using it:

1. By hooks
2. By Trans component

