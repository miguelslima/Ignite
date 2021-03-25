import React from "react";

export function RepositoryItem({ repository }) {
  return (
    <li>
      <strong>{repository?.name ?? "Default"}</strong>
      <p>{repository.description}</p>

      <a href={repository.link}>Acessar repositórios</a>
    </li>
  );
}
