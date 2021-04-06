import { useRouter } from "next/router";
import Link, { LinkProps } from "next/link";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
}

export function ActiveLink({
  children,
  shouldMatchExactHref = false,
  ...rest
}: ActiveLinkProps) {
  const router = useRouter();

  let isActive = false;

  if (
    shouldMatchExactHref &&
    (router.asPath === rest.href || router.asPath === rest.as)
  ) {
    isActive = true;
  }

  if (
    !shouldMatchExactHref &&
    (router.asPath.startsWith(String(rest.href)) ||
      router.asPath.startsWith(String(rest.as)))
  ) {
    isActive = true;
  }
  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? "blue.500" : "gray.50",
      })}
    </Link>
  );
}
