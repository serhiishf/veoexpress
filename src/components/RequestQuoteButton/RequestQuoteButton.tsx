import { Button, type ButtonProps } from '@mantine/core';

type RequestQuoteButtonProps = ButtonProps;

export function RequestQuoteButton({ ...button_props }: RequestQuoteButtonProps) {
  return (
    <Button className="request-quote-button" size="md" {...button_props}>
      Request Free Quote
    </Button>
  );
}
