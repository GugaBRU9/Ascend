CXX := g++
CXXFLAGS := -Wall -Wextra -std=c++17 -Iinclude

SRC_DIR := src
BUILD_DIR := build
TARGET := $(BUILD_DIR)/ascend

SRCS := $(SRC_DIR)/main.cpp \
	$(SRC_DIR)/Player.cpp \
	$(SRC_DIR)/Atributos.cpp \
	$(SRC_DIR)/Entidade.cpp \
	$(SRC_DIR)/HabilidadeAtiva.cpp \
	$(SRC_DIR)/HabilidadePassiva.cpp \
	$(SRC_DIR)/Habilidades.cpp \
	$(SRC_DIR)/Inimigo.cpp

OBJS := $(SRCS:$(SRC_DIR)/%.cpp=$(BUILD_DIR)/%.o)

.PHONY: all app clean

all: $(OBJS)

app: $(OBJS)
	$(CXX) $(OBJS) -o $(TARGET)

$(BUILD_DIR)/%.o: $(SRC_DIR)/%.cpp
	$(CXX) $(CXXFLAGS) -c $< -o $@

clean:
	rm -f $(BUILD_DIR)/*.o $(TARGET)
