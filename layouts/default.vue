<template>
  <QLayout view="hHh lpR fFf">
    <QHeader
      elevated
      class="bg-primary text-white"
    >
      <QToolbar>
        <QToolbarTitle>
          Candidates Dashboard
        </QToolbarTitle>
      </QToolbar>
    </QHeader>
    <QPageContainer>
      <QPage padding>
        <slot />
      </QPage>
    </QPageContainer>
  </QLayout>
</template>
