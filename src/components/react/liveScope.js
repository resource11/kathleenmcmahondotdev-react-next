/**
 * Scope for react-live <LiveProvider>. Anything imported here is available
 * inside ```react-live fenced code blocks. Add components as needed.
 */
import * as Grommet from 'grommet';
import * as GrommetIcons from 'grommet-icons';

import Button from '@/components/react/Button/Button';
import Card from '@/components/react/Card/Card';
import CTALink from '@/components/react/CTALink/CTALink';
import Icon from '@/components/react/Icon/Icon';
import Input from '@/components/react/Input/Input';
import Link from '@/components/react/Link/Link';
import TextArea from '@/components/react/TextArea/TextArea';

export const LiveScope = {
	Grommet,
	GrommetSystem: Grommet,
	GrommetIcons,
	Button,
	Card,
	CTALink,
	Icon,
	Input,
	Link,
	TextArea,
};
