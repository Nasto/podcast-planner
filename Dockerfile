FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443
RUN curl -sL https://deb.nodesource.com/setup_15.x |  bash -
RUN apt update && apt install -y nodejs

FROM mcr.microsoft.com/dotnet/sdk:5.0 as build
RUN curl -sL https://deb.nodesource.com/setup_15.x |  bash - &&\
    curl -fsSL https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - &&\
	echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list &&\
	apt update &&\
	apt -y install nodejs yarn &&\
	apt clean &&\
    rm -rf /var/lib/apt/lists/*
WORKDIR /src
COPY podcast-planner.csproj .
RUN dotnet restore
COPY . .
RUN dotnet build -c Release -o /app/build

FROM build as publish
RUN dotnet publish -c Release -o /app/publish

FROM base as final
COPY --from=publish /app/publish .
ENTRYPOINT [ "dotnet", "podcast-planner.dll"]