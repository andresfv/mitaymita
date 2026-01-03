import { CollapsibleContent } from 'reka-ui';
<!--
  Layout por defecto de la aplicación.
-->
<template>
  <SidebarProvider>
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <div
                class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">

              </div>
              <div class="grid flex-1 text-left text-sm leading-tight">
                <span class="truncate font-semibold">SplitUp</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton as-child>
               <NuxtLink to="/weeks">
                <span>Lista de Semanas</span>
             </NuxtLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        <Collapsible>
          <SidebarGroup>
            <SidebarGroupLabel as-child>
              <CollapsibleTrigger class="group flex w-full items-center justify-between">
                <span>Administrar</span>
                <span class="transition-transform group-data-[state=open]:rotate-90">
                  >
                </span>
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton as-child>
                      <NuxtLink to="/manage/bills">
                        <span>Administrar Facturas</span>
                      </NuxtLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton as-child>
                      <NuxtLink to="/manage/members">
                        <span>Administrar Participantes</span>
                      </NuxtLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton as-child>
                     <NuxtLink to="/manage/places">
                        <span>Administrar Comercios</span>
                      </NuxtLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
    <SidebarInset>
      <div class="p-6">
        <NuxtPage />
      </div>
    </SidebarInset>
  </SidebarProvider>

</template>

<script setup lang="ts">


</script>